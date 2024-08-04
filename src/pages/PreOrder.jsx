import Header3 from "../components/Header/Header3";
import SortComponent from "../components/Others/SortComponent";
import ProductListingPreorder from "../components/Products/ProductListingPreOrder";
import SidebarFilter from "../components/Sidebar/SidebarFilter";
const PreOrder = () => {
  return (
    <div className="bg-slate-300 py-8">
      <div className="mx-auto max-w-7xl p-4">
        <div className="">
          <Header3 />
        </div>
        <div className="flex flex-col lg:flex-row">
          <aside className="w-full p-4 lg:w-1/4">
            <SidebarFilter />
          </aside>
          <main className="w-full p-4 lg:w-3/4">
            <div className="mb-4">
              <SortComponent />
            </div>

            <ProductListingPreorder />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PreOrder;
