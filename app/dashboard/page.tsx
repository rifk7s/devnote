import { Logout } from "@/components/logout";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebooks";

export default async function Page() {
  const notebooks = await getNotebooks();
  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <h1>Dashboard</h1>
      {notebooks.success &&
        notebooks?.notebooks?.map((notebook) => (
          <div key={notebook.id}>{notebook.name}</div>
        ))}
      {notebooks.success && notebooks?.notebooks?.length === 0 && (
        <div>No notebooks found</div>
      )}
      <Logout />
      {/* Add more dashboard content here */}
    </PageWrapper>
  );
}