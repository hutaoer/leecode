/*
给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
初始化 nums1 和 nums2 的元素数量分别为 m 和 n。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
*/

function mergeSortArr(nums1, m, nums2, n) {

}



// 方法三，将 nums1 后面的占位删除并将 nums2 合并 2.用 array.sort() 方法排序
function mergeSortArrV3(nums1, m, nums2, n) {
	nums1.splice(m, n, ...nums2);
	nums1.sort((a, b) => a - b);
}