# Set Working Directory   
setwd("~/Documents/")

# load required library
library("xlsx")
library(ggplot2)
library(lme4)
library(dplyr)
library(lmerTest)
library(margins)

# Read the file
data <- read.xlsx(file = "cleaned_data.xlsx", sheetIndex = 1, header=TRUE)


# Creating table of gender variable
gender_table <- table(data$gender)/3

# Creating bar chart for gender distribution
barplot(gender_table, 
        main="Distribution of Gender", 
        xlab="", 
        ylab="Count", 
        col=c("lightgreen", "forestgreen", "seagreen"), 
        legend=FALSE,
        cex.axis = 1.5,    
        cex.lab = 1.5,
        cex.names = 1.5,
        cex.main = 1.8)

# Creating a table of conditions
condition_table <- table(data$frame)/3

barplot(condition_table,
        main="Distribution of Conditions",
        xlab="",
        ylab="Count",
        col=c("#6699FF","#0099FF", "#0000CC",  "#000066"), 
        cex.axis = 1.5,    
        cex.lab = 1.5,
        cex.names = 1.5,
        cex.main = 1.8)


# Swap acceptance ~ frames
# Box plot 
ggplot(data, aes(x = frame, y = q_2, color = factor(frame))) +
  geom_boxplot() + 
  scale_x_discrete(limits = c("Baseline", "Health", "Money", "Sustainability")) +
  xlab("") + 
  ylab("Swap Acceptance") +
  labs(color = "Frames") + 
  theme(text = element_text(size = 18),
        axis.text = element_text(size = 16,  color = "black"),
        axis.title = element_text(size=18, face="bold"))

# one-way repeated measures ANOVA
q2_frame_anova <- aov(q_2 ~ frame + (1|userid), data=data)
summary(q2_frame_anova)

# post-hoc Tukey test
q2_frame_posthoc <- TukeyHSD(q2_frame_anova)
print(q2_frame_posthoc)

# Creating a data frame with the provided data
q2_posthoc_results <- data.frame(
  Comparison = c("Health-Baseline", "Money-Baseline", "Sustainability-Baseline",
                 "Money-Health", "Sustainability-Health", "Sustainability-Money"),
  diff = c(-0.06958042, -0.09255051, 0.30535139, -0.02297009, 0.37493181, 0.39790189),
  lwr = c(-0.49347332, -0.52542691, -0.12997709, -0.46162700, -0.06614504, -0.05181534),
  upr = c(0.3543125, 0.3403259, 0.7406799, 0.4156868, 0.8160087, 0.8476191),
  p_adj = c(0.9745648, 0.9463210, 0.2709623, 0.9991231, 0.1271792, 0.1039845)
)

# Creating a post-hoc tukey plot
ggplot(q2_posthoc_results, aes(x = diff, y = Comparison)) +
  geom_point(size = 3) +
  geom_errorbarh(aes(xmin = lwr, xmax = upr), height = 0.3) +
  labs(x = "Mean difference", y = "") +
  ggtitle("Tukey Mean-Difference Plot") +
  theme_bw() +
  theme(text = element_text(size = 16, face = "bold"),
        axis.text = element_text(size = 12, color = "black"))

# Swaps in the future ~ frames
# Linear regression
q9_frame_model <- lm(q9_swapsfuture ~ frame, data = data)
summary(q9_frame_model)

# The different explanation frames ~ influencing the decision-making process
# Linear regression
q5_frame_model<- lm(q5_swapsdecision ~ frame, data = data)
summary(q5_frame_model)

# Swap acceptance ~ frames in terms of existing consumer behavior
# Creating a data frame with the relevant variables
df <- data.frame(health = data$health, 
                 q6 = data$q6_health, 
                 money = data$money, 
                 q7 = data$q7_money, 
                 sustainable = data$sustainable, 
                 q8 = data$q8_sustainable, 
                 q2 = data$q_2,
                 userid = data$userid) 

# adding interaction terms to the data frame
df$health_q6 <- df$health * df$q6
df$money_q7 <- df$money * df$q7
df$sustainable_q8 <- df$sustainable * df$q8

# Multilevel linear regression analysis
q2_frame_lifestyle_mllr <- lmer(q2 ~  health + q6 + health_q6 + money + q7 + money_q7 + sustainable + q8 + sustainable_q8 + (1|userid), data = df)
summary(q2_frame_lifestyle_mllr)


# Swap acceptance ~ original basket
# Multilevel linear regression model
q1_model <- lmer(q_2 ~ q_1 + (1|userid), data=data)
summary(q1_model)

# Correlation
cor(data$q_1, data$q_2)


# Perceived understandability, swap acceptance and frames
# Multilevel linear regression, swap acceptance and perceived understandability
q2_q3_model <- lmer(q_2 ~ q_3 + (1|userid), data=data)
summary(q2_q3_model)

# Box plot understanding why the swap was offered vs. frames
ggplot(data, aes(x = frame, y = q_3, color = factor(frame))) +
  geom_boxplot() + 
  scale_x_discrete(limits = c("Baseline", "Health", "Money", "Sustainability")) +
  ylab("Perceived understandability") + xlab("") +
  labs(color = "Frames") + 
  theme(text = element_text(size = 18),
        axis.text = element_text(size = 16, color = "black"),
        axis.title = element_text(size=18, face="bold"))


# one-way repeated measures ANOVA, perceived understanding and frame
q3_frame_anova <- aov(q_3 ~ frame + (1|userid), data=data)
summary(q3_frame_anova)

# post-hoc tukey test
post_hoc_q3 <- TukeyHSD(q3_frame_anova)
print(post_hoc_q3)

# Creating a data frame with the provided data
q3_posthoc_results <- data.frame(
  Comparison = c("Health-Baseline", "Money-Baseline", "Sustainability-Baseline",
                 "Money-Health", "Sustainability-Health", "Sustainability-Money"),
  diff = c(0.3850816, 0.1238636, 0.6065764, -0.2612179, 0.2214948, 0.4827128),
  lwr = c(-0.002812089, -0.272250620, 0.208218316, -0.662621799, -0.182123457, 0.071187902),
  upr = c(0.7729753, 0.5199779, 1.0049345, 0.1401859, 0.6251131, 0.8942376),
  p_adj = c(0.0525084, 0.8518206, 0.0005642, 0.3370295, 0.4911823, 0.0139117)
)

# Creating a post-hoc tukey plot
ggplot(q3_posthoc_results, aes(x = diff, y = Comparison)) +
  geom_point(size = 3) +
  geom_errorbarh(aes(xmin = lwr, xmax = upr), height = 0.3) +
  labs(x = "Mean difference", y = "") +
  ggtitle("Tukey Mean-Difference Plot") +
  theme_bw() +
  theme(text = element_text(size = 16, face = "bold"),
        axis.text = element_text(size = 12, color = "black"))


# Cost influence on swap acceptance
# a one-way repeated measures ANOVA
q2_cost_anova <- aov(q_2~ cost + (1|userid), data=data)
summary(q2_cost_anova)


# post-hoc tukey test
post_hoc_cost <- TukeyHSD(q2_cost_anova)
print(post_hoc_cost)

# Creating a data frame with the provided data
q3_posthoc_results <- data.frame(
  Comparison = c("Decrease - Almost neutral", "Increase - Almost neutral", "Increase - Decrease"),
  diff = c(-0.5148515 , -0.1188119, 0.3960396),
  lwr = c(-0.85707215, -0.46103254, 0.05381894),
  upr = c(-0.1726308, 0.2234088, 0.7382603),
  p_adj = c(0.0012761, 0.6934319, 0.0184567)
)



# Creating a post-hoc tukey plot
ggplot(q3_posthoc_results, aes(x = diff, y = Comparison)) +
  geom_point(size = 3) +
  geom_errorbarh(aes(xmin = lwr, xmax = upr), height = 0.3) +
  labs(x = "Mean difference", y = "") +
  ggtitle("Tukey Mean-Difference Plot") +
  theme_bw() +
  theme(text = element_text(size = 16, face = "bold"),
        axis.text = element_text(size = 12, color = "black"))


# Perceived understandability, swap acceptance and meat swaps
# multilevel linear regression analysis - swap acceptance and understandability
q2_q4_model <- lmer(q_2 ~ q_4 + (1|userid), data = data)
summary(q2_q4_model)

# multilevel linear regression analysis - understandability and meat swaps
q4_meat_model <- lmer(q_4 ~meat + (1|userid), data=data)
summary(q4_meat_model)

# multilevel linear regression analysis - meat swaps and swap acceptance 
q2_meat_model <- lmer(q_2 ~ meat + (1|userid), data=data)
summary(q2_meat_model)

# visualising the relationship between meat and non-meat swaps on swap acceptance
ggplot(data, aes(x = q_2, fill = factor(meat))) +
  geom_density(alpha = 0.5) +
  scale_fill_manual(values = c("blue", "red"), labels = c("Non-Meat", "Meat")) +
  labs(x = "Swap acceptance", y = "Density", fill = "Swap Type")+ 
  ggtitle("Density plot of Meat vs Non-meat swaps") +
  theme(text = element_text(size = 16, face = "bold"),
        axis.text = element_text(size = 12, color = "black"))


