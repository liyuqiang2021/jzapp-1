import Vue from 'vue';

type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?: Tag,
}

type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number; // 数据类型 obj | str
    createdAt?: string; // 类 / 构造函数
};

type Tag = {
    id: string;
    name: string;
};

type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated'; // 联合类型
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => boolean;
    save: () => void;
};

// interface Window {
//     store: {
//         tagList: Tag[];
//         findTag: (id: string) => Tag;
//         createTag: (name: string) => void;
//         removeTag: (id: string) => boolean;
//         updateTag: TagListModel['update'];
//         //当参数完全一样时可以提取相同类型以简化
//         recordList: RecordItem[];
//         createRecord: (record: RecordItem) => void;
//     }
// }