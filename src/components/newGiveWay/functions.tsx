import "dotenv";
import toast from "react-hot-toast";
import { createId } from "@paralleldrive/cuid2";
import { Person } from "../../types/types";
import { checkEmail } from "../../lib/helpers";

export function addPerson(
  person: Person,
  setPerson: React.Dispatch<React.SetStateAction<Person>>,
  persons: Person[],
  setPersons: React.Dispatch<React.SetStateAction<Person[]>>
): void {
  const envMax = process.env.MAX_GROUP_LIMIT;

  if (
    Array.isArray(persons) &&
    persons.length >= (Number.isNaN(Number(envMax)) ? Number(envMax) : 15)
  ) {
    toast.error("Limite de participantes atingido", { id: "limit" });
    return;
  }

  if (!person.name || person.name.length === 0) {
    toast.error("Nome obrigatório", { id: "name" });
    return;
  }

  if (!person.email || person.email.length === 0) {
    toast.error("Email obrigatório", { id: "email1" });
    return;
  }

  if (!checkEmail(person.email)) {
    toast.error("Email inválido", { id: "email2" });
    return;
  }

  const id = createId();

  setPersons((prev) => [...prev, { ...person, id }]);
  setPerson({ name: "", email: "" } as Person);
  toast.success("Participante adicionado", { id: "add" });
}

export function deletePerson(
  id: string,
  persons: Person[],
  setPersons: React.Dispatch<React.SetStateAction<Person[]>>
): void {
  const findPerson = persons.find((person) => person.id === id);

  if (!findPerson) {
    toast.error("Participante não encontrado", { id: "find" });
    return;
  }

  const newObject = persons.filter((person) => person.id !== id);

  setPersons(newObject);
  toast.success("Participante removido", { id: "find" });
}
