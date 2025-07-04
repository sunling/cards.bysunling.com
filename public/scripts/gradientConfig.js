// 共享的渐变背景配置
export const gradientClasses = [
  'card-gradient-1',
  'card-gradient-2',
  'card-gradient-3',
  'card-gradient-4',
  'card-gradient-5',
  'card-gradient-6',
  'card-gradient-7',
  'card-gradient-8',
  'card-gradient-9',
  'card-gradient-10',
  'card-gradient-11',
  'card-gradient-12',
  'card-gradient-13',
  'card-gradient-14'
];

// 定义渐变对应的搜索关键词
export const gradientSearchTerms = {
  'card-gradient-1': "rainbow colorful abstract art",
  'card-gradient-2': "sunrise warm orange yellow nature",
  'card-gradient-3': "purple fantasy magical violet",
  'card-gradient-4': "ocean blue water sea waves",
  'card-gradient-5': "fire flame orange red energy",
  'card-gradient-6': "green nature forest fresh leaves",
  'card-gradient-7': "red orange passion warm sunset",
  'card-gradient-8': "sky blue white clouds peaceful",
  'card-gradient-9': "grey mist fog minimal calm",
  'card-gradient-10': "honey yellow warm golden light",
  'card-gradient-11': "mint green fresh nature spring",
  'card-gradient-12': "purple pink soft pastel flowers",
  'card-gradient-13': "golden wheat field warm autumn",
  'card-gradient-14': "silver grey moonlight minimal"
};

// 为每个渐变背景配置合适的字体颜色
export const gradientFontColors = {
  'card-gradient-1': '#2c3e50',    // 彩虹梦境 - 深蓝灰
  'card-gradient-2': '#8b4513',    // 日出暖阳 - 深棕色
  'card-gradient-3': '#4a148c',    // 紫色幻想 - 深紫色
  'card-gradient-4': '#1e3a8a',    // 海洋蓝调 - 深蓝色
  'card-gradient-5': '#2c3e50',    // 火焰橙黄 - 深蓝灰
  'card-gradient-6': '#2d5016',    // 清新绿意 - 深绿色
  'card-gradient-7': '#8b0000',    // 热情红橙 - 深红色
  'card-gradient-8': '#1e3a8a',    // 天空蓝白 - 深蓝色
  'card-gradient-9': '#6b7280',    // 雾霭灰蓝 - 中性灰
  'card-gradient-10': '#8b4513',   // 蜂蜜暖黄 - 深棕色
  'card-gradient-11': '#1a5d1a',   // 薄荷清绿 - 深绿色
  'card-gradient-12': '#4a148c',   // 淡雅紫粉 - 深紫色
  'card-gradient-13': '#8b4513',   // 麦田金黄 - 深棕色
  'card-gradient-14': '#374151'    // 月光银灰 - 深灰色
};

// 获取渐变对应的字体颜色
export function getFontColorForGradient(gradientClass) {
  return gradientFontColors[gradientClass] || '#333333';
}

// 获取随机渐变类
export function getRandomGradientClass() {
  return gradientClasses[Math.floor(Math.random() * gradientClasses.length)];
}