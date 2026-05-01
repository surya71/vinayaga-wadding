import CategoryPage from "./CategoryPage";
import { categoryPages } from "./categoryData";

export default function ActiveCare() {
    return <CategoryPage data={categoryPages.activeCare} />;
}
