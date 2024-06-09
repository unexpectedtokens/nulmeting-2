type EchoInput = {
  name: string;
  email: string;
  age: number;
};

export const useEchoStore = defineStore("echo", () => {
  const config = useRuntimeConfig();
  const echoResponse = ref<Record<string, any> | null>(null);
  const populateEchoResponse = async (requestBody: EchoInput) => {
    const response = await useFetch(config.public.api_url, {
      method: "POST",
      headers: {
        "x-api-key": config.public.api_key,
      },
      body: {
        echo: requestBody,
      },
    });

    echoResponse.value = response;
  };

  return { echoResponse, populateEchoResponse };
});
