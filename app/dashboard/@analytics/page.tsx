import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from "next/link"
  
export default function page() {
    return (
        <Card className="h-full border-2 border-red-500">
  <CardHeader>
    <CardTitle>Analytics Card</CardTitle>
    <CardDescription>Card Analytics</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Analytics</p>
    <Link href='/dashboard/archieve'>archieve</Link>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    )
}