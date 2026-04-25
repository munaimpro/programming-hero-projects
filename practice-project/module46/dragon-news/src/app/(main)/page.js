import Image from "next/image";

const getCategories = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  return await res.json();
}

export default async function Home() {

  const categories = await getCategories();
  console.log(categories.data.news_category);

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto">
      <div className="font-bold text-3xl col-span-3">
        <ul className="flex flex-col gap-3">
          Categories
          {
            categories.data.news_category.map((category) => {
              return <li className="bg-slate-100 rounded-md font-bold text-center text-xl" key={category.id}>{category.category_name}</li>
            })
          }
        </ul>
      </div>

      <div className="font-bold text-3xl bg-green-500 col-span-6">
        news
      </div>

      <div className="font-bold text-3xl bg-red-500 col-span-3">
        icons
      </div>
    </div>
  );
}
