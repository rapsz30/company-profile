"use server";

import { revalidatePath } from "next/cache";

/**
 * handle book deletionkp logicw
 * @param {number} bookId -
 */
export async function deleteBookAction(bookId) {
  console.log(`--- DELETE ACTION TRIGGERED for ID: ${bookId} ---`);

  revalidatePath("/dashboard/admin");
}