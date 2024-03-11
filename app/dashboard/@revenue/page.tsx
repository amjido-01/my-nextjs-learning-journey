import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
export default function page() {
    return (
        <Card>
  <CardHeader>
    <CardTitle>Revenue Card</CardTitle>
    <CardDescription>Card Revenue</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Revenue</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    )
}