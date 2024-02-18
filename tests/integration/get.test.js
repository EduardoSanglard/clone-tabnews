test("GET to /api/v1/status returns 200", async () => {
  console.log("Testando status 200");
  const response = await fetch("https://localhost/api/v1/status");
  expect(response.status).toBe(200);
});
