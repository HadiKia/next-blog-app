"use client";

import Button from "@/ui/Button";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Comment from "./Comment";
import classNames from "classnames";
import Modal from "@/ui/Modal";
import { useState } from "react";

const PostComments = ({ post: { comments, _id: postId } }) => {
  const [open, setIsOpen] = useState(false);

  return (
    <div className="my-20">
      <Modal
        open={open}
        onClose={() => setIsOpen(false)}
        title="عنوان مودال"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
      >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
      </Modal>
      <div className="flex flex-col items-center justify-between gap-y-6 ">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl font-bold text-secondary-800">نظرات</h2>
          <Button
            variant="outline"
            className="flex items-center gap-x-2 py-2"
            onClick={() => setIsOpen(true)}
          >
            <QuestionMarkCircleIcon className="w-5 h-5 mb-0.5" />
            <span>ثبت نظر جدید</span>
          </Button>
        </div>
        <div className="w-full space-y-8 post-comments bg-secondary-0 rounded-xl border border-secondary-100 py-6 px-3 lg:px-6">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment._id}>
                <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4 mb-3">
                  <Comment
                    comment={comment}
                    // onAddComment={() => addNewCommentHandler(comment)}
                  />
                </div>
                <div className="post-comments__answer ms-auto w-[95%] space-y-3">
                  {comment.answers.map((item, index) => (
                    <div key={item._id} className="relative">
                      <div
                        className={classNames(
                          "answer-item border border-secondary-200 bg-secondary-50 rounded-lg p-4",
                          { "last-item": index + 1 === comment.answers.length }
                        )}
                      >
                        <Comment key={item._id} comment={item} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-secondary-500 text-center py-8">
              برای این پست نظری ثبت نشده است.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostComments;
