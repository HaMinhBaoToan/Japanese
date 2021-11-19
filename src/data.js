/* eslint-disable no-sparse-arrays */
var data = [
    {
        id: 1,
        title: "..は, ...が",
        body: "",
        note: "So sánh は và が",
        description: [
            `Trợ từ は được sử dụng trong các trường hợp sau:  
        1. Dùng để biểu thị chủ đề trong câu  
        2. Dùng để đưa một thành phần lên làm chủ đề câu. 
        2. Dùng trong câu có vị ngữ là từ nghi vấn. 
        3. Dùng trong câu nói về một sự việc đang diễn ra trước mắt người nói, hoặc một quy luật, tập quán, phép tắc hay một tính chất khó thay đổi nào đó (cái đã xác định). 
        4. Dùng trong câu biểu thị ý so sánh, phân biệt, lựa chọn. 
        5. Dùng trong câu vừa có chủ đề vừa có chủ ngữ (trợ từ は đánh dấu chủ đề). 
        6. Dùng trong câu biểu thị lý do, nguyên nhân. 
        7. Dùng để biểu thị sự nhấn mạnh về mức độ hoặc giới hạn nào đó (với số từ, trợ từ は thường đi kèm để biểu thị mức độ “như vậy hoặc hơn thế nữa" (đặc biệt là trong cách nói về giá cả). 
        8. Dùng để nhấn mạnh một hành động lặp lại nhiều lần. 
        9. Ngoài ra, đối với ngạn ngữ, trong một số trường hợp, trợ từ は có thể đi cùng với động từ.  
        `,
            `Trợ từ が được sử dụng trong các trường hợp sau:
        1. Dùng để biểu thị chủ thể của hành động, động tác, tính chất, trạng thái (thường là câu trần thuật, thuật lại một sự việc, sự thực nào đó hoặc miêu tả những sự vật đang nhìn thấy trước mắt, người nói không đưa phán đoán của mình vào mà chỉ thuật lại sự việc, hiện tượng y như nó vốn có).
        2. Chỉ chủ ngữ trong câu tồn tại.
        3. Biểu thị “đối thể” trong câu chỉ trạng thái (tức là chỉ đối tượng của trạng thái tình cảm, cảm giác, năng lực, hy vọng…).
        4. Dùng trong câu có chủ ngữ là từ nghi vấn. 
        5. Dùng trong câu tường thuật lại một sự việc, vấn đề mới được phát hiện.
        6. Dùng trong câu vừa có chủ đề vừa có chủ ngữ (trợ từ  が đánh dấu chủ ngữ).
        7. Biểu thị đối tượng được lựa chọn trong câu so sánh.
        8. Biểu thị chủ ngữ trong mệnh đề phụ.
        9. Được dùng như một liên từ để nối hai mệnh đề có quan hệ đối lập hoặc đẳng lập về ngữ nghĩa.10. Dùng trong câu vào đề. 11. Ngoài ra, trợ từ が còn được sử dụng trong một số hình thức quán dụng hay một số ngạn ngữ.  `,
            `Tóm lại, khác với trợ từ は, trợ từ が là trợ từ chuyên dùng để biểu thị các kiểu quan hệ ngữ pháp, đơn thuần chỉ biểu thị mối quan hệ giữa chủ ngữ và vị ngữ, cụ thể là trợ từ が có chức năng chỉ ra “chủ thể”–đối tượng thực sự gây ra hoặc có các hành động, tính chất, trạng thái được nói đến ở động từ vị ngữ. 
      Vậy nên, những câu văn có trợ từ が sẽ trở thành câu “phi chủ đề”, chỉ đơn thuần miêu tả sự việc hoặc thuyết minh tình huống, quá trình...... chứ không phải là câu biểu thị phán đoán như câu có trợ từ は. 
      Bên cạnh đó, trợ từ は có phạm vi ảnh hưởng rộng, đến tận động từ đứng cuối câu (ví dụ 1), trong khi trợ từ が chỉ có ảnh hưởng tới động từ gần nó nhất (ví dụ 2).`,
        ],
        example: [
            [
                "彼女は医者です。",
                "木村さんは家族にこの手紙を書いた。この手紙は木村さんが家族に書いた。",
                "あなたの鍵はどれですか。",
                "水は摂氏100度で沸騰します。",
                "父は医者で、 母は歌手だ。",
                "象は耳が大きい。",
                "会社を休んだのは風邪を引いたからです。",
                "一昨日まではこのテレビは壊れていなかった。",
            ], ["海が青い。",
                "椅子の上に傘があります。",
                "私は辛いものが好きです。",
                "どれがあなたの鍵ですか。",
                "あ、鞄がない。",
                "ベトナムは食べ物が安い。",
                "富士山の方が高いです。",
                "雨が降りそうなので試合は中止します。",
            ], [" 鈴木君 は 大学に合格していたら、電話します。",
                "鈴木君    が 大学に合格していたら、電話します。"]
        ],
        exampleMean: [
            [
                "Cô ấy là bác sĩ.",
                "Chị Kimura viết bức thư này cho gia đình. Bức thư này (là) Chị Kimura viết cho gia đình.",
                "Chìa khóa của bạn là cái nào?",
                "Nước sôi ở 100 độ C.",
                "Bố tôi là bác sĩ, còn mẹ tôi là ca sĩ.",
                "Con voi thì tai to.",
                "Nghỉ làm là do bị cảm.",
                "Cho đến ngày hôm kia thì chiếc tivi này vẫn chưa bị hỏng.",
            ],
            ["Biển có màu xanh.",
                "Trên ghế có ô.",
                "Tôi thích đồ cay.",
                "Cái nào là chìa khóa của bạn?  ",
                "Ơ, mất túi rồi.",
                "Ở Việt Nam, đồ ăn rẻ.",
                "Núi Phú Sĩ cao hơn.",
                "Vì trời sắp mưa, nên trận đấu sẽ được dời lại.",
            ], ["Nếu Suzuki đỗ đại học, thì cậu ta sẽ gọi điện.", "Nếu Suzuki đỗ đại học, thì (tôi) sẽ gọi điện."]
        ],

        lesson: "N5",
    },
    {
        id: 2,
        title: "います",
        body: "",
        note: "Có... (sở hữu)",
        description: [`<><strong>N</strong> が います  <br />
            Dùng để biểu thị sự sở hữu đối với người và động vật. Không dùng cho đồ vật.</>`],
        example: [
            [
                "私は猫が二匹います。",
                "彼は息子がいません。",

            ]
        ],
        exampleMean: [
            [
                "Tôi có hai con mèo.",
                "Ông ấy không có con trai..",

            ],
        ],

        lesson: "N5",
    },
    {
        id: 3,
        title: "～も",
        body: "",
        note: "Cũng, đến mức, đến cả",
        description: [
            `- Dùng miêu tả sự việc/ hành động/ tính chất tương tự với một sự việc/ hành động/ tính chất đã nêu trước đó. (nhằm tránh lặp lại trợ từ “は”/động từ nhiều lần) 
        - Thể hiện sự ngạc nhiên về mức độ nhiều.  
        - Thể hiện mức độ không giống như bình thường (cao hơn hoặc thấp hơn). 
        - “も” có chức năng tương tự như “は”, “が” nên không đứng liền kề với “は”, “が” khi dùng cho một chủ từ.
        - “も” cũng có thể đứng sau các trợ từ khác giống như “は” で／と／へ／など も.
        `,
            ,
        ],
        example: [
            [
                "日曜日ですが、どこへも行けません。",
                "田中さんは医者です。私も医者です。",
                "雨はもう四日も降っています。",
                "お客はひとりも来こなかった。",
            ],

        ],
        exampleMean: [
            [
                "Ngày chủ nhật nhưng tôi cũng chẳng thể đi đâu.",
                "Anh Tanaka là bác sĩ. Tôi cũng là bác sĩ.",
                "Trời đã mưa tới 4 ngày rồi.",
                "Không có một người khách nào tới.",
            ]
        ],

        lesson: "N5",
    },
    {
        id: 4,
        title: "～で",
        body: "",
        note: "Tại, ở, vì, bằng, với (khoảng thời gian)",
      
        description: [
            `- Diễn tả nơi xảy ra hành động. 
            - Diễn tả nơi xảy ra sự kiện.
            -  Diễn tả nguyên nhân.
            -  Diễn tả phương pháp, phương thức, phương tiện.
            -  Diễn tả sự vật được làm bằng vật liệu/chất liệu gì.
            -   Diễn tả một khoảng thời gian giới hạn.
        `,
            ,
        ],
        example: [
            [
                "姫路 で岡山に行く列車に乗り換える。",
                "明後日は体育館でスポーツ大会があります。",
                "事故でバスが止まっています。",
                "その機械は電気で動く。",
                "このクリームでおいしいケーキを作ります。",
                "このプロジェクトは一ヶ月で終りますか。",
            ],

        ],
        exampleMean: [
            [
                "Tôi chuyển sang xe lửa đi Okayama tại Himeji.",
                "Ngày kia ở trung tâm thể dục sẽ có đại hội thể thao.",
                "Vì sự cố nên xe buýt đang bị dừng.",
                "Cái máy đó chạy bằng điện.",
                "Tôi sẽ làm một cái bánh ngon bằng loại kem này.",
                "Dự án này trong 1 tháng có xong không?",
            ]
        ],

        lesson: "N5",
    },
    {
        id: 5,
        title: "～に/へ",
        body: "",
        note: "Chỉ hướng, thời điểm",
        description: [`<>
        - <strong>N</strong>（時間又は場所 / Thời gian hoặc địa điểm）＋に/へ    <br/>
        - Dùng để chỉ địa điểm.   <br/>
        - Dùng để chỉ thời điểm.   <br/>
        - Dùng để chỉ hướng đến ai.   <br/>
        - Khi muốn nói về thời điểm mà một hành động nào đó xảy ra, chúng ta thêm trợ từ「に」vào sau danh từ chỉ thời gian.  <br/>
        - Dùng「に」đối với những hành động diễn ra trong thời gian ngắn.  <br/>
        - 「に」được dùng khi danh từ chỉ thời gian có con số đi kèm và không dùng trong trường hợp không có con số đi kèm. Tuy nhiên, đối với trường hợp cửa thứ trong tuần thì có thể dùng hoặc không dùng「に」  <br/>
        - Khi động từ chỉ sự di chuyển, thì trợ từ「へ」được dùng sau danh từ chỉ phương hướng hoặc địa điểm .  <br/>
            - Trợ từ「へ」phát âm là「え」</>`
        ],
        example: [
            [
                "明日、アメリカ に／へ 行きます。",
                "午後6時に帰ります。",
                "このプレゼントを 桜さん に/へ 渡してください。",
            ],

        ],
        exampleMean: [
            [
                "Ngày mai tôi sẽ đi Mỹ.",
                "6 giờ chiều tôi sẽ về.",
                "Xin hãy trao món quà này đến chị Sakura.",
            ]
        ],

        lesson: "N5",
    },
];

var dataSentences = [
    {
        "Chào Hỏi": {
            word: "こんにちは",
            mean: "Xin chào",
            romaji: "こんにちは",
        },


    }
]

export { dataSentences, data }