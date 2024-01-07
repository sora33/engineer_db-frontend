import { Inner, Heading, Text, LinkText } from "@/components/atoms";

export default function NotFound() {
  return (
    <>
      <title>すごい404ページ</title>
      <Inner className="my-12">
        <Heading as="h1">ページが見つかりません。</Heading>
        <Text size="sm">
          お探しのページは、移動または削除された可能性があります。
        </Text>
        <LinkText href="/" className="text-orange-500">
          トップページに戻る
        </LinkText>
      </Inner>
    </>
  );
}
