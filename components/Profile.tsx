import React from "react";

import PromptCard from "./PromptCard";

interface prompt {
  _id: string;
  creator: {
    email: string;
    username: string;
    image: string;
  };
  prompt: string;
  tag: string;
}

interface ProfileProps {
  name: string;
  desc: string;
  data: prompt[];
  handleEdit: (post: prompt) => void;
  handleDelete: () => {};
}

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}: ProfileProps) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
