import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateExtendVersion(date: Date) {
  return format(date, "E, dd 'de' MMMM 'de' yyyy", { locale: ptBR });
}
