export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const ALLOWED_FILE_EXTENSIONS = [".pdf", ".doc", ".docx"];
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export function validateFileUpload(file: File): { valid: boolean; error?: string } {
  if (!file || file.size === 0) {
    return { valid: false, error: "Please select a file to upload" };
  }

  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File size must be less than 5MB. Your file is ${(file.size / (1024 * 1024)).toFixed(2)}MB`,
    };
  }

  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return { valid: false, error: "Only PDF, DOC, and DOCX files are allowed" };
  }

  const ext = "." + file.name.split(".").pop()?.toLowerCase();
  if (!ALLOWED_FILE_EXTENSIONS.includes(ext)) {
    return { valid: false, error: "Invalid file extension" };
  }

  const parts = file.name.split(".");
  if (parts.length > 2) {
    return { valid: false, error: "Invalid file name" };
  }

  return { valid: true };
}
