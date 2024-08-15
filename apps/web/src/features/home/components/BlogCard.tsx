import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { FC } from "react";

interface BlogCardProps {
  thumbnail: string;
  author: string;
  description: string;
  title: string;
  category: string;
}

const BlogCard: FC<BlogCardProps> = ({
  thumbnail,
  author,
  description,
  title,
  category,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="relative h-[220px] w-full overflow-hidden rounded-md">
          <Image src={thumbnail} alt="" fill className="object-cover" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <Badge variant="outline" className="bg-green-200">
          {category}
        </Badge>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm font-light italic">{author}</p>
        <p className="line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
