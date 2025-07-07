import { Card, Skeleton, Box, Flex } from "@radix-ui/themes"

export const TodolistSkeleton = () => {
  return (
    <Card size="2" style={{ width: "100%", marginBottom: "12px" }}>
      <Flex direction="column" gap="2">
        <Skeleton height="20px" width="40%" />
        <Skeleton height="16px" width="70%" />
        <Skeleton height="16px" width="60%" />
      </Flex>
    </Card>
  )
}
