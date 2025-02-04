import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/spaceflight.png" alt="@spaceflight" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
