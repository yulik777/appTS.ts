 let info: {
        "officeId": number;
    "isOpened": boolean;
    "contact": {
        "phone": string;
        "email": string;
        "adress": {
            "city": string;
        }
    }} = {
        "officeId": 15,
        "isOpened": false,
        "contact": {
            "phone":" 080654321",
            "email": "my@own.ua",
            "adress": {
                "city": "Kiyv"
            }
        }}

enum QuestionStatus {
    Published = 'published',
    Draft = 'draft',
    Deleted = 'deleted',
}
        async function getFaqs(req: {
            topicID: number;
            status?: QuestionStatus;
        }) : 
        Promise<{
            question: string;
            answer: string;
            tags: string[];
            likes: number;
            status: QuestionStatus;
        }[]>
        {
            const res = await fetch('/faqs', {
                method: 'POST',
                body: JSON.stringify(req)
            });
            const data = await res.json();
            return data;
        }
