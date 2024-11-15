"use server";
export async function loginRequest(_: any, formData: FormData) {
  console.log(formData);
  return {
    status: true,
    error: "",
  };
}
