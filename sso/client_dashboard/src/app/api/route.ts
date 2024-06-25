"use server";

import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "@/app/hooks/cookie";

// Define the type of the data returned from the validation endpoint
interface ValidateData {
  status: string;
  // Add other properties as needed
}

export async function GET(req: NextRequest) {
  console.log("DID IT GET HERE.........");
  try {
    // Extract the secretId from the request parameters
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const secretId = searchParams.get("secretId");

    console.log("SECRET ID: ", secretId);

    // Check if the secretId exists
    if (!secretId) {
      return NextResponse.json({
        status: "error",
        message: "Secret ID is required",
      });
    }

    // Make a request to validate the application
    const validateResponse = await fetch(
      `http://localhost:1337/api/application/validate/${secretId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const validateData = (await validateResponse.json()) as ValidateData;

    // Check if the application is valid
    if (validateData.status !== "valid") {
      console.log("Invalid application");
      return NextResponse.json({
        status: "error",
        message: "Invalid application",
      });
    }

    const token = await getCookie("ezeUserSSOAccessToken");
    console.log("TOOKAAKKAKA: ", token);

    let responseData = {};
    if (token) {
      console.log("HAS TOKEN");
      responseData = { status: "ok", accessToken: token };
    } else {
      responseData = { status: "error", message: "" };
    }

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json({
      status: "error",
      message: "Internal server error",
    });
  }
}
