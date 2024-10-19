"use client";

import { useState } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);

  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent browswer default behaviour (reload)
    setSubmitting(true);

    try {
      if (!session || !session.user) {
        throw new Error("Session not found");
      }

      const userId = (session.user as { id: string }).id;
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
