import { Person } from "../types/types";
import toast from "react-hot-toast";
import BaseApi from "./frontServices";

export async function HandlerCreateGroup(
  group: string,
  persons: Person[]
): Promise<boolean> {
  if (!group || !persons) {
    toast.error(`${!group ? "'Grupo'" : "'Pessoas'"} não pode estar vazio`);
    return Promise.reject(false);
  }

  if (group === "" || persons.length === 0) {
    toast.error(
      `${group === "" ? "'Grupo'" : "'Pessoas'"} não pode estar vazio`
    );
    return Promise.reject(false);
  }

  if (persons.length < 2) {
    toast.error("Adicione ao menos duas pessoas!");
    return Promise.reject(false);
  }

  try {
    const response = await BaseApi.post("/match", { group, persons });

    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(false);
  }
}
