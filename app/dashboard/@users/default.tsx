import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
export default function Defaultpage() {
    return (
        <Card>
  <CardHeader>
    <CardTitle>Users Card</CardTitle>
    <CardDescription>Card Users</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Users</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    )
}