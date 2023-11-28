
import config from "config";
import { fetchApi, fetchGetApi } from "./Api";

export const UserInitCheckApiRoot = (data) => {
    // for AppRoot  //
    return  fetchApi(config.HOST_NAME + "user/init_check", data);   
}

export const UserLoginApiRoot = (data) => {
    // for actions(session)  //
    return  fetchApi(config.HOST_NAME + "user/login", data);   
}

export const HomeApiRoot = (data) => {
    // for homeScreen  //
    return  fetchApi(config.HOST_NAME + "home", data);   
}

export const HomeMonthFetchApiRoot = (enpnt,data) => {
    // for homeScreen  //
    return  fetchApi(config.HOST_NAME + "home" + "/" +enpnt, data);   
}

export const HomeAccPrvdrFetchApiRoot = () => {
    // for homeScreen,ViewLeadScreen,SearchDropDownAPI  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/acc_prvdr");   
}

export const CallLogIgnoreApiRoot = (data) => {
    // for homeScreen  //
    return  fetchApi(config.HOST_NAME + "call_log/ignore",data);   
}

export const CallLogUpdateApiRoot = (data) => {
    // for homeScreen  //
    return  fetchApi(config.HOST_NAME + "call_log/update",data);   
}

export const ViewLeadApiRoot = (data) => {
    // for homescreen,ViewLeadScreen,LeadInterestedScreen,KYCHomeScreen,PreviewRegistrationScreen,RegisterScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"lead/view",data);   
}

export const CustSearchApiRoot = (data) => {
    // for SearchCustomerScreen,ActiveCustomerListScreen,actions(customerSearch)  //
    return  fetchApi(config.HOST_NAME + "cust/search",data);   
}

export const CustProfileApiRoot = (data) => {
    // for SearchCustomerScreen,ProfileScreen,ActiveCustomerListScreen,ActiveCustomerWithoutFAsScreen,PreApprovalListScreen,ScheduleMapScreen  //
    return  fetchApi(config.HOST_NAME + "cust/view",data);   
}

export const ScheduleCalendarApiRoot = (data) => {
    // for ScheduleScreen  //
    return  fetchApi(config.HOST_NAME + "schedule/calendar",data);   
}

export const ScheduleCalDaysApiRoot = () => {
    // for ScheduleScreen  //
    return  fetchApi(config.HOST_NAME + "schedule/cal_days");   
}

export const RmRoutesApiRoot = (data) => {
    // for RmRouteMapScreen  //
    return  fetchApi(config.HOST_NAME + "rm/routes",data);   
}

export const LeadGetCountApiRoot = () => {
    // for salesPipeline  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"lead/get_count");   
}

export const LeadListApiRoot = (data) => {
    // for ImageButton(salesPipeline)  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"lead/list",data);   
}

export const OnboardingEffortApiRoot = (data) => {
    // for OnboardPerformanceScreen  //
    return  fetchApi(config.HOST_NAME + "rm/onboarding_efforts",data);   
}

export const LeadSearchApiRoot = (data) => {
    // for SearchLeadScreen,LeadPendingKycScreen,LeadPendingAuditScreen,LeadPendingScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"lead/search",data);   
}

export const VisitSuggestionsListApiRoot = () => {
    // for VisitSuggestionListScreen,AppRoot  //
    return  fetchApi(config.HOST_NAME + "cust/criteria/visit_suggestion");   
}

export const TaskListCountApiRoot = () => {
    // for ApprovalScreensItems,ScheduleMapScreen,DrawerScreen  //
    return  fetchApi(config.HOST_NAME + "task/list_counts");   
}

export const TaskListApiRoot = (data) => {
    // for WaiverList,CustAppAccessReqList,AppRoot,FAsUpgradeRequest  //
    return  fetchApi(config.HOST_NAME + "task/list",data);   
}

export const TaskApprovalApiRoot = (data) => {
    // for WaiverView,CustAppAccessView ,FAsUpgradeRequestApprove //
    return  fetchApi(config.HOST_NAME + "task/approval",data);   
}

export const TaskCreateApiRoot = (data) => {
    // for ProfileScreen  //
    return  fetchApi(config.HOST_NAME + "task/create",data);   
}

export const CustUpdateApiRoot = (data) => {
    // for MapViewScreen,EditCustomerScreen  //
    return  fetchApi(config.HOST_NAME + "cust/update",data);   
}

export const NearByCustApiRoot = () => {
    // for MapViewScreen  //
    return  fetchApi(config.HOST_NAME + "cust/nearby_cust");   
}

export const CallLogApiRoot = (data) => {
    // for CallLogScreen,DrawerScreen  //
    return  fetchApi(config.HOST_NAME + "call_log",data);   
}

export const CallLogListApiRoot = (data) => {
    // for CallLogScreen,DrawerScreen  //
    return  fetchApi(config.HOST_NAME + "call_log/list",data);   
}

export const LastFasApiRoot = (data) => {
    // for WaiverDetailsComponent,FasUpgradeRequestApprove,ProfileScreen,PendingViewScreen,AppRoot  //
    return  fetchApi(config.HOST_NAME + "fa/last_fas",data);   
}

export const FaUpgradeApiRoot = (data) => {
    // for FasUpgradeRequestApprove  //
    return  fetchApi(config.HOST_NAME + "fa/action/upgrade",data);   
}

export const PendingWithRmApiRoot = () => {
    // for PendingListScreen,PendingViewScreen,PendingFAModal,PendingFATab,AppRoot  //
    return  fetchApi(config.HOST_NAME + "fa/criteria/pending_w_rm");   
}

export const PendingWithPrvdrApiRoot = () => {
    // for PendingWithProviderScreen  //
    return  fetchApi(config.HOST_NAME + "fa/criteria/pending_w_prvdr");   
}

export const PendingWithCustApiRoot = () => {
    // for PendingWithCustomerScreen  //
    return  fetchApi(config.HOST_NAME + "fa/criteria/pending_w_cust");   
}

export const DueTodayApiRoot = () => {
    // for DueTodayScreen  //
    return  fetchApi(config.HOST_NAME + "fa/due");   
}

export const DisbursedTodayApiRoot = () => {
    // for DisbursedTodayScreen,  //
    return  fetchApi(config.HOST_NAME + "fa/disb_tdy");   
}

export const PreApprovedTodayApiRoot = () => {
    // for FAsPreApprovedByRmScreen,AppRoot  //
    return  fetchApi(config.HOST_NAME + "fa/pre_appr_tdy");   
}

export const DueTomorrowApiRoot = () => {
    // for DueTomorrowScreen  //
    return  fetchApi(config.HOST_NAME + "fa/due_tmrw");   
}

export const DueDayAfterApiRoot = () => {
    // for DueDayAfterScreen  //
    return  fetchApi(config.HOST_NAME + "fa/due_dat");   
}

export const OngoingFaApiRoot = () => {
    // for OnGoingFAListScreen  //
    return  fetchApi(config.HOST_NAME + "fa/ongoing");   
}

export const CaptureFaApiRoot = (data) => {
    // for OnGoingFAListScreen  //
    return  fetchApi(config.HOST_NAME + "fa/action/capture_fa",data);   
}

export const OverDueApiRoot = (data) => {
    // for OverDueScreen,OverDueAboveSixtyDaysScreen  //
    return  fetchApi(config.HOST_NAME + "fa/overdue",data);   
}

export const VisitPlanApiRoot = () => {
    // for VisitPlanScreen  //
    return  fetchApi(config.HOST_NAME + "visit/visit_plan");   
}

export const FileUploadApiRoot = (data) => {
    // for ModalComponent,ProfileScreen,LeadInterestedScreen,DirectKyc,LogVisitScreen,EvaluationScreen,CustomerAgreementScreen,EditCustomerScreen,RegisterScreen,ForceCheckInModel,ForceCheckinNewModal,DrawerScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"common/upload",data);   
}

export const FileRemoveApiRoot = (data) => {
    // for ModalComponent,ProfileScreen,LeadInterestedScreen,DirectKyc,LogVisitScreen,EvaluationScreen,CustomerAgreementScreen,EditCustomerScreen,RegisterScreen,ForceCheckInModel,ForceCheckinNewModal,DrawerScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"common/file_remove",data);   
}

export const CustPaymentProofApiRoot = (data) => {
    // for ModalComponent,ProfileScreen  //
    return  fetchApi(config.HOST_NAME + "cust/payment_proof",data);   
}

export const InitiateRekycApiRoot = (data) => {
    // for RenewalAgreementListScreen,ProfileScreen,ForceCheckInModel,ForceCheckinNewModal  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust/re_kyc",data);   
}

export const ListRekycApiRoot = () => {
    // for RenewalAgreementListScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust/list_rekyc");   
}

export const DoRekycApiRoot = (data) => {
    // for RenewalAgreementListScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust/do_rekyc",data);   
}

export const ActiveCustWoFaApiRoot = () => {
    // for ActiveCustomerWithoutFAsScreen,AppRoot  //
    return  fetchApi(config.HOST_NAME + "cust/criteria/active_cust_wo_fa");   
}

export const PreApprovalCustListApiRoot = () => {
    // for PreApprovalListScreen  //
    return  fetchApi(config.HOST_NAME + "cust/criteria/pre_approval");   
}

export const CustDisableApiRoot = (data) => {
    // for ProfileScreen  //
    return  fetchApi(config.HOST_NAME + "cust/disable",data);   
}

export const CustCondoneApiRoot = (data) => {
    // for ProfileScreen  //
    return  fetchApi(config.HOST_NAME + "cust/condone",data);   
}

export const ActivatePreApprovalApiRoot = (data) => {
    // for ProfileScreen  //
    return  fetchApi(config.HOST_NAME + "fa/pre_appr",data);   
}

export const RemovePreApprovalApiRoot = (data) => {
    // for ProfileScreen  //
    return  fetchApi(config.HOST_NAME + "fa/remove_appr",data);   
}

export const CustRegGetNameApiRoot = (data) => {
    // for ProfileScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/get_name",data);   
}

export const ProductListApiRoot = (data) => {
    // for ProfileScreen  //
    return  fetchApi(config.HOST_NAME + "product/list",data);   
}

export const RequestWaiverApiRoot = (data) => {
    // for ProfileScreen  //
    return  fetchApi(config.HOST_NAME + "request_waiver",data);   
}

export const AddNewCustAccApiRoot = (data) => {
    // for ProfileScreen,AddAccountModal  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust/add_new_cust_acc",data);   
}

export const PartnerRmsApiRoot = (data) => {
    // for ViewLeadScreen,SearchDropDownAPI  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/partner_rms",data);   
}

export const DiscussionRemarkApiRoot = (data) => {
    // for ViewLeadScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"lead/remarks/add",data);   
}

export const GetLeadJsonApiRoot = (data) => {
    // for ViewLeadScreen,CreateReferralCode,LeadInterestedScreen,LogVisitScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"lead/get_lead_json",data);   
}

export const CloseLeadApiRoot = (data) => {
    // for ViewLeadScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"lead/close",data);   
}

export const SalesPitchApiRoot = () => {
    // for SalsesPitchScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"lead/sales_pitch");   
}


export const RetrieveNameApiRoot = (data) => {
    // for CreateReferralCode  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"rm/retrieve_name",data);   
}

export const GenerateReferralCodeApiRoot = (data) => {
    // for CreateReferralCode  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"rm/generate_referral_code",data);   
}

export const DupCheckApiRoot = (data) => {
    // for LeadInterestedScreen,DirectKyc,LogVisitScreen,EditLeadScreen,CustomerAgreementScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/dup_check",data);   
}

export const LeadSalesVisitApiRoot = (data) => {
    // for CreateReferralCode,LeadInterestedScreen,DirectKyc,InitiateNewLead,LogVisitScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"lead/sales_visit",data);   
}

export const AddLocationApiRoot = (data) => {
    // for DirectKyc,LogVisitScreen,EditLeadScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"address/add_location",data);   
}

export const ValidateLeadApiRoot = (data) => {
    // for InitiateNewLead  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"lead/validate",data);   
}

export const AllocateLeadApiRoot = (data) => {
    // for InitiateNewLead  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"lead/allocate",data);   
}

export const RmLiveLocationApiRoot = (data) => {
    // for LogVisitScreen,EvaluationScreen,ScheduleMapScreen,RegisterScreen,DrawerScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"rm/live_location",data);   
}

export const ViewDataConsentApiRoot = (data) => {
    // for DataConsentScreen,RegDataConsentScreen,RegisterScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/view_consent",data);   
}

export const SignDataConsentApiRoot = (data) => {
    // for DataConsentSignatureScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/sign_consent",data);   
}

export const LeadUpdateApiRoot = (data) => {
    // for EditLeadScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"lead/update",data);   
}

export const FaListUpgradeReqApiRoot = () => {
    // for FAsUpgradeRequest,AppRoot  //
    return  fetchApi(config.HOST_NAME + "fa/list_upg_reqs");   
}

export const FaApprovalApiRoot = (data) => {
    // for PendingViewScreen,PendingFAModal  //
    return  fetchApi(config.HOST_NAME + "fa/action/approval",data);   
}

export const CustRegCheckinApiRoot = (data) => {
    // for EvaluationScreen,RegisterScreen  //
    console.log('config.HOST_NAME :>> ', config.HOST_NAME);
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/checkin",data);   
}

export const EvaluationApiRoot = (data) => {
    // for ReviewEvaluationScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/eval",data);   
}

export const SignAgrmtApiRoot = (data) => {
    // for CustomerAgreementScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust/sign_agrmt",data);   
}

export const CustRegSentOtpApiRoot = (data) => {
    // for CustomerAgreementScreen,EditCustomerScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/send_otp",data);   
}

export const VerifyMobNumApiRoot = (data) => {
    // for CustomerAgreementScreen,EditCustomerScreen  //
    return  fetchApi(config.HOST_NAME + "cust_reg/verify_mob_num",data);   
}

export const GenerateOtpApiRoot = (data) => {
    // for actions(customerSearch),actions(session)  //
    return  fetchApi(config.HOST_NAME + "otp",data);   
}

export const CheckOtpApiRoot = (data) => {
    // for actions(customerSearch)  //
    return  fetchApi(config.HOST_NAME + "check_otp",data);   
}

export const IdTextractApiRoot = (data) => {
    // for EditCustomerScreen,RegisterScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/id_textract",data);   
}

export const VisitCheckInApiRoot = (data) => {
    // for ScheduleMapScreen,actions(schedule)  //
    return  fetchApi(config.HOST_NAME + "visit/checkin",data);   
}

export const VisitCheckOutApiRoot = (data) => {
    // for  actions(schedule)  //
    return  fetchApi(config.HOST_NAME + "visit/checkout",data);   
}

export const CustRegCheckOutApiRoot = (data) => {
    // for  actions(schedule)  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/checkout",data);   
}

export const CancelScheduleApiRoot = (data) => {
    // for  actions(schedule)  //
    return  fetchApi(config.HOST_NAME + "schedule/cancel",data);   
}

export const RescheduleApiRoot = (data) => {
    // for  actions(schedule)  //
    return  fetchApi(config.HOST_NAME + "schedule/reschedule",data);   
}

export const CreateScheduleApiRoot = (data) => {
    // for  actions(schedule)  //
    return  fetchApi(config.HOST_NAME + "schedule",data);   
}

export const AddrConfigApiRoot = (enpnt) => {
    // for actions(customerRegister)  //
    return  fetchGetApi(config.HOST_NAME + /*"kyc/*/"addr_config/" +enpnt);   
}

export const CustRegAddressApiRoot = (data) => {
    // for actions(customerRegister),SearchDropDownAPI  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/address",data);   
}

export const CustomerRegistrationApiRoot = (data) => {
    // for actions(customerRegister)  //
    return  fetchGetApi(config.HOST_NAME + "cust_reg",data);   
}

export const CustKycApiRoot = (data) => {
    // for PreviewRegistrationScreen,RegisterScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_kyc",data);   
}

export const CheckNationalIdApiRoot = (data) => {
    // for RegisterScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"lead/check_national_id",data);   
}

export const CustDltAgrmtApiRoot = (data) => {
    // for RegisterScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust/delete_agrmt",data);   
}

export const CustRegSendKycOtpApiRoot = (data) => {
    // for RegisterScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/send_kyc_otp",data);   
}

export const CustRegVerifyKycMobNumApiRoot = (data) => {
    // for RegisterScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/verify_kyc_mob_num",data);   
}

export const CustRegAddtionalNumApiRoot = (data) => {
    // for RegisterScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/addl_num",data);   
}

export const CustRegAddAccountApiRoot = (data) => {
    // for RegisterScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/add_acc",data);   
}

export const ResolveCommentsApiRoot = (data) => {
    // for RegisterScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"lead/resolve_comments",data);   
}

export const GetRmNameApiRoot = () => {
    // for IconDropDown  //
    return  fetchApi(config.HOST_NAME + "rm/rm_sales_name");   
}

export const GetSalesRepNameApiRoot = () => {
    // for IconDropDown  //
    return  fetchApi(config.HOST_NAME + "rm/sales_name_for_rm");   
}

export const CheckForceCkeckInApiRoot = (data) => {
    // for ForceCheckInModel,ForceCheckinNewModal  //
    return  fetchApi(config.HOST_NAME + "rm/check_force_checkin",data);   
}

export const ReqForceCkeckInApiRoot = (data) => {
    // for ForceCheckInModel,ForceCheckinNewModal  //
    return  fetchApi(config.HOST_NAME + "rm/req_force_checkin",data);   
}

export const GetProductsApiRoot = () => {
    // for SearchDropDownAPI  //
    return  fetchApi(config.HOST_NAME + "lead/products");   
}

export const KycDocsDropdownApiRoot = (data) => {
    // for SearchDropDownAPI  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_kyc/kyc_docs_dropdown",data);   
}

export const ViewSelfDeclarationApiRoot = (data) => {
    // for RegSelfDeclarationScreen,RegisterScreen //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/self_declaration",data);   
}

export const SignSelfDeclarationApiRoot = (data) => {
    // for RegSelfDeclarationScreen  //
    return  fetchApi(config.HOST_NAME + /*"kyc/*/"cust_reg/sign_self_declaration",data);
}   

export const ViewProfileDocsApiRoot = (data) =>{
    // for Profile Screen //
    return fetchApi(config.HOST_NAME + 'cust/view_docs' ,data)
}