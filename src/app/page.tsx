"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { comments } from "@/libs/comments";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import { ReplyProps } from "../libs/types";

interface CommentComponent {
  userImagePath: string;
  username: string;
  commentText: string;
  likeNum: number;
  replies: ReplyProps[];
}

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src="/profileImages/nutcha.jpg"
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="fw-semibold fs-5 text-white">
              Nutcha Khampoung 660610751
            </span>
          </div>

          <span className="text-white">
            Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207
          </span>

          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}>100 คน</span>
          </div>
          <hr className="m-0 border" />
        </div>

        {/* map-loop render Comment component here */}
        {comments.map((cmd: CommentComponent) => (
          <Comment
            key={cmd.username}
            ImagePath={cmd.userImagePath}
            username={cmd.username}
            commentTitle={cmd.commentText}
            likes={cmd.likeNum}
            replies={cmd.replies}
          />
        ))}
      </div>
    </div>
  );
}