import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-background flex flex-1 flex-col items-center justify-center px-4">
      <div className="animate-fade-in max-w-md space-y-6 text-center">
        {/* 404 Number */}
        <div className="space-y-2">
          <h1 className="text-primary text-9xl font-bold">404</h1>
          <div className="bg-primary mx-auto h-1 w-24 rounded-full" />
        </div>

        {/* Error Message */}
        <div className="space-y-3">
          <h2 className="text-foreground text-3xl font-semibold">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might
            have been moved or deleted.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row">
          <Link href="/dashboard">
            <Button size="lg" className="w-full sm:w-auto">
              Go to Dashboard
            </Button>
          </Link>
          <Link href="/projects">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Projects
            </Button>
          </Link>
        </div>

        {/* Additional Help */}
        <div className="text-muted-foreground pt-8 text-sm">
          <p>
            Need help?{" "}
            <Link
              href="/dashboard"
              className="text-primary font-medium hover:underline"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
