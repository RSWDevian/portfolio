// src/app/api/images/route.ts
import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function GET(request: NextRequest) {
  try {
    const result = await cloudinary.api.resources({
      max_results: 500,
      type: "upload",
    });

    const resources = result.resources.map((res: any) => ({
      public_id: res.public_id,
      secure_url: res.secure_url,
      folder: res.folder || "root",
    }));

    return NextResponse.json({
      success: true,
      resources: resources,
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { error: "Failed to fetch images", details: error },
      { status: 500 }
    );
  }
}