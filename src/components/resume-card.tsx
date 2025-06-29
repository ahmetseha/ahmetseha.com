import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle: string;
  href: string;
  badges?: string[];
  period: string;
  description?: string;
}

export function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) {
  return (
    <Card className="group relative overflow-hidden">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <Avatar className="size-12 border">
            <AvatarImage alt={altText} src={logoUrl} />
            <AvatarFallback>{title.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <Link
                href={href}
                className="font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </Link>
              {badges && (
                <div className="flex gap-1">
                  {badges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <div className="text-sm text-muted-foreground">{subtitle}</div>
            <div className="text-sm text-muted-foreground">{period}</div>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
