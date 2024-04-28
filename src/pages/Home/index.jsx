import { useForm } from "react-hook-form";
import { useHomeContext } from "../../hooks/useHomeContext";
import { Domain } from "../components/Domain";
import {
  Button,
  Field,
  Form,
  InfoAside,
  Label,
  Page,
  ErrorMessage,
  PageContainer,
  ResultContainer,
  SearchContainer,
  SearchInput,
  Subtitle,
  TitleContainer,
} from "./styles";

const Home = () => {
  const { searchDomain, domains } = useHomeContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async ({ domain }) => {
    await searchDomain(domain);
    reset();
  };

  return (
    <Page>
      <PageContainer>
        <InfoAside>
          <TitleContainer>
            <Subtitle>
              verifique se seu domínio já foi registrado no Brasil
            </Subtitle>
            <Label>
              digite o domínio para consultar
              <br />
              suas informações
            </Label>
          </TitleContainer>
          <SearchContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Field>
                <SearchInput
                  type="text"
                  placeholder="domínio"
                  {...register("domain", { required: true })}
                />
                {errors.domain && (
                  <ErrorMessage>Campo de domínio obrigatório</ErrorMessage>
                )}
              </Field>
              <Button type="submit" disabled={isSubmitting}>
                consultar
              </Button>
            </Form>
          </SearchContainer>
        </InfoAside>
        <ResultContainer>
          {domains.map((domain) => (
            <Domain domain={domain} />
          ))}
        </ResultContainer>
      </PageContainer>
    </Page>
  );
};

export default Home;
