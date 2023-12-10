import BaseApi from "@/lib/frontServices";
import toast from "react-hot-toast";

export async function handlerGetData(
  params: { group_id: string; person_id: string },
  setRefer: React.Dispatch<React.SetStateAction<string | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  setLoading(true);
  try {
    const { group_id, person_id } = params;
    const response = await BaseApi.get(`/match/${group_id}/${person_id}`);
    setRefer(response?.data?.refer?.name);
  } catch {
    toast.error("Erro ao carregar dados");
  }
  setLoading(false);
}
