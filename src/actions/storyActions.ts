"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import crypto from "crypto";

export async function uploadStory(formData: FormData) {
  try {
    const file = formData.get("image") as File;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const location = formData.get("location") as string;
    const dateString = formData.get("date") as string;

    if (!file || !title || !description || !location || !dateString) {
      return { success: false, error: "Semua kolom harus diisi." };
    }

    const date = new Date(dateString);

    // Save file locally to public/uploads
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const uniqueId = crypto.randomUUID();
    const originalName = file.name;
    const extension = path.extname(originalName);
    const fileName = `${uniqueId}${extension}`;
    
    // Ensure directory exists
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e) {
      // Directory might already exist
    }

    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    const imageUrl = `/uploads/${fileName}`;

    // Save to database
    await prisma.story.create({
      data: {
        title,
        description,
        location,
        date,
        imageUrl,
      },
    });

    revalidatePath("/");
    
    return { success: true };
  } catch (error) {
    console.error("Error uploading story:", error);
    return { success: false, error: "Gagal menyimpan cerita." };
  }
}
