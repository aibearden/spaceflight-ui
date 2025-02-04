import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/spaceflight.png" alt="@spaceflight" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
