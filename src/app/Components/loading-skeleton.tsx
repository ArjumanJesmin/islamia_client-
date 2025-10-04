// components/loading-skeleton.tsx
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface LoadingSkeletonProps {
  count?: number;
  type?: 'feature' | 'header' | 'stats';
}

export function LoadingSkeleton({ count = 4, type = 'feature' }: LoadingSkeletonProps) {
  if (type === 'header') {
    return (
      <div className="text-center mb-16">
        <Skeleton className="h-12 w-80 mx-auto mb-4 rounded-lg bg-muted" />
        <Skeleton className="h-6 w-96 mx-auto rounded-lg bg-muted" />
      </div>
    );
  }

  if (type === 'stats') {
    return (
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="p-6 bg-card rounded-2xl shadow-lg border">
            <Skeleton className="h-8 w-16 mx-auto mb-2 bg-muted" />
            <Skeleton className="h-4 w-20 mx-auto bg-muted" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} className="border-0 bg-card shadow-lg overflow-hidden animate-pulse">
          <CardHeader className="text-center pb-4">
            <Skeleton className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-muted" />
            <Skeleton className="h-7 w-32 mx-auto rounded-lg bg-muted" />
          </CardHeader>
          <CardContent className="text-center space-y-2">
            <Skeleton className="h-4 w-full rounded bg-muted" />
            <Skeleton className="h-4 w-4/5 mx-auto rounded bg-muted" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}