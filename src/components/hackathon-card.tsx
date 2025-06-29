import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

interface HackathonCardProps {
  title: string;
  description: string;
  location: string;
  dates: string;
  image: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

export function HackathonCard({
  title,
  description,
  location,
  dates,
  image,
  links,
}: HackathonCardProps) {
  return (
    <li className="relative pl-6 pb-6">
      <div className="absolute left-0 top-0 h-3 w-3 rounded-full border bg-background" />
      <Card className="group relative overflow-hidden">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{location}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {dates}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
              {links && links.length > 0 && (
                <div className="flex gap-2">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-xs text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </li>
  );
}
