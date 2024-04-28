import { memo } from "react";
import { format } from "date-fns";
import { formatStatus } from "../../../utils/format-status";
import {
  RegisterButton,
  ResultInfo,
  ResultInfoLabel,
  ResultItem,
  ResultTitle,
} from "./styles";

export const Domain = memo(({ domain }) => {
  return (
    <ResultItem key={domain.fqdn}>
      <ResultTitle>{domain.fqdn}</ResultTitle>
      <ResultInfo>
        <ResultInfoLabel>expira em</ResultInfoLabel>
        <p>
          {domain["expires-at"]
            ? format(domain["expires-at"], "dd/MM/yyyy")
            : "-"}
        </p>
      </ResultInfo>
      <ResultInfo>
        <ResultInfoLabel>status</ResultInfoLabel>
        <p>{formatStatus(domain.status)}</p>
      </ResultInfo>
      <RegisterButton
        target="_blank"
        href={`https://registro.br/busca-dominio/?fqdn=${domain.fqdn}`}
      >
        registro.br
      </RegisterButton>
    </ResultItem>
  );
});
