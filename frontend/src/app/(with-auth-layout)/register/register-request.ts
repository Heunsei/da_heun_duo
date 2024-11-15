"use server";
export async function requestCode() {}

export async function requestRegister(_: any, formData: FormData) {
  console.log(formData);
  return {
    status: true,
    error: "",
  };
}
