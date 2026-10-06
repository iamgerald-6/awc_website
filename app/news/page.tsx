import { PageIntro } from "../component/PageIntro";
import { NewsGrid } from "../component/newsGrid";
import { siteContent } from "../content/siteContent";

export default function NewsPage() {
  const page = siteContent.pages.news;

  return (
    <div>
      <PageIntro
        label="News"
        title={page.title}
        description={page.description}
      />
      <NewsGrid showViewAll={false} emptyOnly />
    </div>
  );
}
