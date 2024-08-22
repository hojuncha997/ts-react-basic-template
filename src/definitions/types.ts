export type PageableData<T> = {
  //   content: Member[];
  content: T[]; // 담겨오는 데이터(화면에서 사용할 데이터)
  pageable: {
    sort: {
      // 정렬 정보
      sorted: boolean; // 정렬 여부
      unsorted: boolean; // 정렬 안된 여부
      empty: boolean; // 비어있는지 여부
    };
    offset: number; // 오프셋: 결과 집합의 시작점. offset이 20이면 처음 20개의 결과를 건너뛰고 21번째 항목부터 데이터를 가져옴.  보통 page 번호와 page 크기를 이용해 계산됨: offset = (page number - 1) * page size
    pageNumber: number; // 현재 요청하는 페이지 번호. 자바의 Pageable인터페이스에서는 0부터 시작
    pageSize: number; // 페이지 크기: 한 페이지에 보여줄 데이터의 개수
    paged: boolean; // 페이지 여부: 'Pageable을 사용하면서도 페이지네이션을 적용하지 않는 특수한 경우를 처리하기 위해 존재
    unpaged: boolean; // 페이징 하지 않은 경우
  };
  totalPages: number; // 전체 페이지 수
  totalElements: number; // 전체 데이터 수
  size: number; // 페이지 크기
  number: number; // 현재 페이지 번호
  sort: {
    sorted: boolean; // 정렬 여부
    unsorted: boolean; // 정렬 안된 여부
    empty: boolean; // 비어있는지 여부
  };
  numberOfElements: number; // 현재 페이지의 데이터 수
  first: boolean; // 첫 페이지 여부
  last: boolean; // 마지막 페이지 여부
  empty: boolean; // 비어있는지 여부

  /*

중복되는 것처럼 보이는 속성들이 있는 이유는 다음과 같다:
a) 구조적 차이:

pageable 객체는 요청(request)에 관한 정보를 담고 있다.
최상위 레벨의 속성들은 응답(response)에 관한 정보를 나타낸다.

b) 사용 목적의 차이:

pageable 내부의 정보는 요청 시 사용된 페이징 파라미터를 반영한다.
최상위 레벨의 속성들은 실제 쿼리 결과를 기반으로 한 값들이다.

c) 구체적인 예시:

pageable.pageSize와 size:
pageSize는 요청된 페이지 크기, size는 실제 반환된 항목 수다.
pageable.pageNumber와 number:
pageNumber는 요청된 페이지 번호, number는 실제 반환된 페이지 번호다.
pageable.sort와 최상위 sort:
요청된 정렬 정보와 실제 적용된 정렬 정보를 각각 나타낸다.

d) 유연성과 호환성:

이러한 구조는 Spring Data JPA와 같은 프레임워크의 페이징 구현과 일치한다.
클라이언트에게 요청 정보와 응답 정보를 모두 제공하여 더 많은 컨텍스트를 제공한다.


페이지네이션을 구현할 때는 pageable속성의 하위 속성을 사용하기 보다는, 최상위 속성을 사용하는 것이 좋다.
요청에 대한 값이 아니라 실제 서버의 응답에 대한 값이기 때문이다.

  */
};
