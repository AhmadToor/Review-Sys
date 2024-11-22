import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SidebarOptInForm() {
  return (
    <Card className="shadow-none bg-white border-none rounded-3xl">
      
        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-sm">Upgrade to Pro</CardTitle>
          <CardDescription  >
          Unlock all features and get unlimited access to our support team.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2.5 p-4">
          
          <Button
            className="rounded-full"
            size="sm"
          >
            Upgrade to Pro Plan
          </Button>
        </CardContent>
      
    </Card>
  )
}
