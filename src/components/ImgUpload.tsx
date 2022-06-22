import React, { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
// ref = refはデータベースに書き込んだり読み込んだりするためのデータベースの特定の場所を表す。
// ref() or firebase.database().ref("child/path").の形で使用できる、
// 書き込むときはset()、読み込むときはon()をref()の後に使用する。


// const storageRef = ref(storage, 'some-child'); ←Doc通りの書き方　refの謎を明らかにしたい

const ImgUpload = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [uploaded, setuploaded] = useState<boolean>(false);

  const uploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      console.log(file);
      const imageRef = ref(storage, "images/" + file.name); //変数を使ってファイルパスを作成する
      const imageRefPath = imageRef.toString();
      const uploadImage = uploadBytesResumable(imageRef, file); //imageRefのファイルパスでfileを保存するよって意味

      uploadImage.on("state_changed", (snapshot) => {  //state_changedは状態が変わったら第二引数の関数を使うって意味
        setLoading(true);
      },
        (err) => {
          console.log(err);
          // console.log(storage);
        },
        () => {
          setLoading(false);
          setuploaded(true);
          console.log(imageRefPath);
        }
      )
    }
  }
  return (
    <>
      <div>ImgUplode</div>
      <h1>画像アップロード</h1>
      <form>
        <input type="file" onChange={uploadImg} accept=".jpg,.png,.jpeg" />
        {/* <button type="submit" onSubmit={}>送信</button> */}
      </form>

      {loading ? (<h2>アップロード中…</h2>) :
        <>
          {uploaded ? <h2>アップロードが完了しました</h2> :
            <h2>画像をアップロードして下さい</h2>
          }
        </>
      }
    </>


  )
}

export default ImgUpload