let mockedResponse: Partial<Response> = {
  ok: true,
  async json() {
    return {
      results: [],
    };
  },
};

export default async () => mockedResponse;

export function mockFetch(response: Partial<Response>) {
  mockedResponse = response;
}
