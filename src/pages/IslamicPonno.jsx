import Header2 from "../components/Header/Header2";
import ProductListing from "../components/Products/ProductListing";
import SidebarFilter2 from "../components/Sidebar/SidebarFilter2";
import SortComponent from "../components/SortComponent";
const IslamicPonno = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="mx-auto max-w-7xl p-4">
        <div className="">
          <Header2 />
        </div>

        <div className="flex flex-col lg:flex-row">
          <aside className="w-full p-4 lg:w-1/4">
            {/* <SidebarFilter /> */}
            <SidebarFilter2 />
          </aside>
          <main className="w-full p-4 lg:w-3/4">
            <div className="mb-4">
              <SortComponent />
            </div>

            {/* <div className="mb-8 text-2xl font-bold">মোট 456 টি পণ্য</div> */}

            <ProductListing />
          </main>
        </div>
      </div>
    </div>
  );
};

export default IslamicPonno;
