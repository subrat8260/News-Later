import { AppSidebar } from "@/components/App-Sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation, Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardImage } from "../CardImage";
import { PaginationDemo } from "../Pagination";
import Header from "../Header";
import Footer from "../Footer";

export default function Page() {
  const [news, setNews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(1);
  useEffect(() => {
    const fetchNews = async () => {
      const News = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/news?page=${page}`,
      );

      setNews(News.data.articles);
      console.log(News);
      setTotalArticles(News.data.totalArticles);
    };
    fetchNews();
  }, [page]);

  // get the path name
  const pathnames = location.pathname.split("/").filter(Boolean);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16  items-center gap-2 border-b px-3">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-2 min-w-0">
            <SidebarTrigger />
            <Separator orientation="vertical" className=" h-4 shrink-0" />
            <h3 className="text-2xl font-bold shrink-0 whitespace-nowrap">
              News
            </h3>
            {/* Custome Breadcrumb is design below */}
            <Breadcrumb>
              <BreadcrumbList>
                {/* Home always first */}
                <BreadcrumbItem className="hidden md:bl">
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                {pathnames.map((name, index) => {
                  const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                  const isLast = index === pathnames.length - 1;

                  return (
                    <span key={routeTo} className="flex items-center">
                      <BreadcrumbSeparator />

                      <BreadcrumbItem>
                        {isLast ? (
                          <BreadcrumbPage>
                            {decodeURIComponent(name)}
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink asChild>
                            <Link to={routeTo}>{decodeURIComponent(name)}</Link>
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </span>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          {/* RIGHT SIDE */}
          <div className=" ml-auto flex  gap-2 shrink-0">
            <Header setShowForm={setShowForm} showForm={showForm} />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/*<div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div> */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => {
              return <CardImage key={item.id} news={item} />;
            })}
          </div>
          {/* PAGINATION */}
          <div className="flex justify-center mt-6 ">
            <PaginationDemo
              page={page}
              setPage={setPage}
              totalArticles={totalArticles}
            />
          </div>
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
