import { CreateNotebookButton } from "@/components/create-notebook-button";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebooks";

export default async function Page() {
  const notebooks = await getNotebooks();

  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <h1>Notebooks</h1>

      <CreateNotebookButton />

      {notebooks.success &&
        notebooks?.notebooks?.map((notebook) => (
          <div key={notebook.id}>{notebook.name}</div>
        ))}
        
      {notebooks.success && notebooks?.notebooks?.length === 0 && (
        <div>No notebooks found</div>
      )}
      
      {/* Add more dashboard content here */}
    </PageWrapper>
  );
}