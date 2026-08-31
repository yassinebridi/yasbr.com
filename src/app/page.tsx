import { Home } from '@components';
import { homeContent } from '@/data';

export default function IndexPage() {
  return (
    <div className="py-6">
      <Home content={homeContent} />
    </div>
  );
}
