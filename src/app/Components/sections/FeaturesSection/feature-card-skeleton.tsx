import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function FeatureCardSkeleton() {
  return (
    <Card className="group relative overflow-hidden border-2 border-transparent bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4">
          <Skeleton className="h-16 w-16 rounded-full" />
        </div>
        <Skeleton className="h-6 w-3/4 mx-auto" />
      </CardHeader>
      <CardContent className="text-center">
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-4/5 mx-auto" />
      </CardContent>
    </Card>
  )
}